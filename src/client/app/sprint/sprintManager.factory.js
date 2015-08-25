(function () {
	'use strict';

	angular
		.module('app.sprint')
		.factory('sprintManager',sprintManager);

	sprintManager.$inject = ['$http','$q','Sprint'];


	/* @ngInject */
	function sprintManager($http,$q,Entity) {


		var _entity = {
			name:'sprint',
			baseUrl:'server/sprints/'
		};


		var service = {
			_entity: _entity,
			_pool: {},
			_retrieveInstance: _retrieveInstance,
			_search: _search,
			_load: _load,
			_remove: _remove,
			_create: _create,
			_update: _update,
			/* Public Methods */
			/* Use this function in order to get an Entity instance by it's id */
			get:getEntity,
			getAll:getEntities,
			/* Use this function in order to get instances of all the entities */
			loadAll: loadAllEntities,
			/*  This function is useful when we got somehow the book data and we wish to store it or update the pool and get a book instance in return */
			upsert: upsertEntity,
			/*	Remove Entity*/
			remove: removeEntity,
			/* Update tasks attribut and update each task in taskManager*/
			updateTasks: updateTasks
		};

		return service;
		//////////////////////////////


		//////////// PRIVATE //////////////


		//Add registered Entity to the pool
		//@return the entity
		function _retrieveInstance(id,data) {
			var instance = this._pool[id];

			if (instance) {
				instance.setData(data);
			} else {
				instance = new Entity(data);
				this._pool[data.id] = instance;
			}

			return instance;
		}

		//search the pool
		//@return the entity or undefined
		function _search (id) {
			return this._pool[id];
		}

		//load Entity from server and add it to the pool (or update if already present)
		//@return promise with loaded Entity
		function _load(id, deferred) {
			var scope = this;

			//$http.get(scope._entity.baseURI + id).then(onSuccess,onFailure);

			onFailure("No server available");

			function onSuccess(data){
				var entity = scope._retrieveInstance(data.id,data);
				deferred.resolve(entity);
			}

			function onFailure(reason){
				console.error('unable to load '+scope._entity.name+' from '+scope._entity.baseUrl+id);
				deferred.reject(reason);
			}

		}


		//delete entity from server and remove it from pool.
		//@return promise with the deleted Entity
		function _remove(id,deferred){
			var scope = this;

			//$http.delete(scope.entity.baseURI + id).then(onSuccess,onFailure);

			onSuccess();

			function onSuccess(){
				var entity = scope._pool[id];
				if(entity){
					delete scope._pool[id];
				}
				deferred.resolve(entity);
			}

			function onFailure(reason){
				console.error('unable to delete '+scope._entity.name+' from '+scope._entity.baseUrl+id);
				deferred.reject(reason);
			}
		}

		//post entity to server and add it to the pool
		//@return promise with the create Entity
		function _create(data,deferred){
			var scope = this;

			//$http.post(scope.entity.baseURI,data).then(onSuccess,onFailure);

			onSuccess(data);

			function onSuccess(reponse){
				reponse.id = Date.now()+Math.floor(Math.random()*1000);
				var entity = scope._retrieveInstance(reponse.id,reponse);
				deferred.resolve(entity);
			}

			function onFailure(reason){
				console.error('unable to create member');
				deferred.reject(reason);
			}
		}

		//put entity to server and update/add it to the pool
		//@return promise with the updated Entity
		function _update(data,deferred){
			var scope = this;

			//$http.put(scope.entity.baseURI+data.id,data).then(onSuccess,onFailure);

			onSuccess(data)

			function onSuccess(reponse){
				var entity = scope._retrieveInstance(reponse.id,reponse);
				deferred.resolve(entity);
			}

			function onFailure(reason){
				console.error('unable to update '+scope._entity.name+' from '+scope._entity.baseUrl+id);
				deferred.reject(reason);
			}

		}

		function _addTasks(id,idsToAdd){
			for
		}
		
		function _removeTasks(id,idsToRemove){
			
		}
		
		

		//////////// PUBLIC //////////////

		function getEntities() {
			var entities = [];
			angular.forEach(this._pool,function (entity) {
				entities.push(entity);
			});
			return entities;
		}

		function getEntity(id) {
			var deferred = $q.defer();
			var entity = this._search(id);
			if (entity) {
				deferred.resolve(entity);
			} else {
				this._load(id, deferred);
			}
			return deferred.promise;
		}

		function loadAllEntities() {
			var deferred = $q.defer();
			var scope = this;

			$http.get(entity.baseUrl).then(onSuccess,onFailure);

			return deferred.promise;

			function onSuccess(entitiesArray) {
				var entities = [];
				entitiesArray.forEach(function (data) {
					var entity = scope._retrieveInstance(data.id, data);
					entities.push(entity);
				});

				deferred.resolve(entities);
			}

			function onFailure(reason){
				console.log(scope);

				console.error('unable to load entities '+scope._entity.name);
				deferred.reject(reason);
			}

		}

		function upsertEntity(data) {					
			var scope = this;
			var deferred = $q.defer();

			if(!data.id){
				this._create(data,deferred)
			}else {
				this._update(data,deferred)
			}

			return deferred.promise;

		}

		function removeEntity(data, deferred) {
			var deferred = $q.defer();
			var entity = this._search(data.id);
			if (entity) {
				this._remove(entity.id, deferred);
			} else {
				deferred.reject(entity.name+' id:'+id+' not found.');
			}
			return deferred.promise;

		}

		
		function updateTasks(id,tasksArrayId_NEW){
			var deferred = $q.defer();
			var sprintDeferred = $q.defer();
			var entity = this._search(id);
			if (entity) {
				sprintDeferred.resolve(entity);
			} else {
				this._load(id, sprintDeferred);
			}
			
			return deferred.promise;
			
			
			sprintDeferred.promise.then(sprintFound,sprintNotFound);
			
			
			function sprintFound(sprint){
				
				var idsToRemove = [];
				var idsToAdd = [];
				
				//Remove task that are no longer selected
				angular.forEach(sprint.tasks, function(task){
					/*task id is not in tasksArrayId_NEW*/
					if(tasksArrayId_NEW.indexOf(task.id)<0){
						idsToRemove.push(task.id);
					}
				});
				
				//Add task that are not in sprint
				angular.forEach(tasksArrayId_NEW,function(task){
					/*task id is not is sprint.tasks*/
					if(sprint.tasks.indexOf(task.id)<0){
						idsToAdd.push(task.id)
					}
				});
				
				var addPromise = this._addTask(sprint.id,idsToAdd);
				var removePromise = this._removeTask(sprint.id,idsToAdd);
				
/*			
				TODO
				addPromise.error(addPromiseFail);
				removePromise.error(removePromiseFail);
*/
				$q.all(addPromise,removePromise).success(onUpdateSuccess);
				
				function onUpdateSuccess(reponse){
					var message = reponse[0]+' tasks added and '+reponse[1]+' task remove';
					
				 	sprint.tasks = 
					
					
				}
			}
			
			function sprintNotFound(reason){
				console.error(reason);
			}
		}
	}
}());
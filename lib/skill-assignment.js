/* =========================================

   Skill Assignment v1.0
   Darren Smith
   Copyright 2017, Darren Smith

   A skill based resource assignment library

   Resources:
   root
   	skills
   	resources
   	events
   	assignments

   Methods:
   var skillId = skills.add(skillName);
   skills.remove(skillId);
   var resourceId = resources.add(resourceName);
   resources.remove(resourceId);
   var eventId = events.add(eventName);
   events.remove(eventId);
   resources.assignSkill(resourceId,skillId);
   events.assignSkill(eventId,skillId);
   events.assignResources(); -> Call method, no inputs. Assigns resources to events based on best fit for skill



===========================================*/

function skillBRA(){
	console.log('Instantiating skillBRA');
    return this;
}

/* 
   =============
   Skill Methods
   =============
*/

skillBRA.prototype.skills = {};

skillBRA.prototype.skills.add = function(skillName){
	
}

skillBRA.prototype.skills.remove = function(skillId){
	
}

/* 
   ================
   Resource Methods
   ================
*/

skillBRA.prototype.resources = {};

skillBRA.prototype.resources.add = function(resourceName){
	
}

skillBRA.prototype.resources.remove = function(resourceId){
	
}

/* 
   =============
   Event Methods
   =============
*/

skillBRA.prototype.events = {};

/* 
   =====================
   Library Instantiation
   =====================
*/

var skillbra = new skillBRA();

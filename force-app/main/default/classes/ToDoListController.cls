public with sharing class ToDoListController {

   
    //Description:- This method is used to return a list of tasks

    @AuraEnabled(cacheable=true)
    public static List<Task> getTasks() {
        return [SELECT Subject FROM Task WHERE OwnerId =:UserInfo.getUserId()];
    }
}
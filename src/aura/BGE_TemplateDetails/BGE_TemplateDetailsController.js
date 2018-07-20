({ // eslint-disable-line

    /******************************** Template Details Controller Functions *****************************/

    /* ***************************************************************
     * @Description. Constructs the Model Module, and the View Modules.
     *****************************************************************/
    init: function (component, event, helper) {
        var bgeTemplateController = helper.BGETemplateController(component);

        var model = helper.TemplateDetailsModel();
        model.setBackendController(bgeTemplateController);
        component.set('v.model', model);
        
        var templateInfoView = helper.TemplateInfoView(component, model);
        component.set('v.templateInfo', templateInfoView);
        var availableTemplateFieldsView = helper.AvailableTemplateFieldsView(component, model);
        component.set('v.availableTemplateFields', availableTemplateFieldsView);
        var activeTemplateFieldsView = helper.ActiveTemplateFieldsView(component, model);
        component.set('v.activeTemplateFields', activeTemplateFieldsView);

        model.init();
    },

    /* ***************************************************************
     * @Description. Cancels edit or creation of the template.
     *****************************************************************/
    cancel: function(component, event, helper) {

    },

    /* ***************************************************************
     * @Description. Saves the template information. 
     *****************************************************************/
    save: function(component, event, helper) {
        var model = component.get('v.model');
        model.saveTemplateDetails();
    },

    /******************************** Template Fields Controller Functions *****************************/

    /* ***************************************************************
     * @Description. Updates the selected available fields in the 
     * Template Fields Model.
     *****************************************************************/
    selectAvailableTemplateFields: function (component, event, helper) {
        var selectedFields = {};
        event.getParam('selectedRows').forEach(function(selectedRow) {
            selectedFields[selectedRow.id] = selectedRow;
        });
        var model = component.get('v.model');
        model.getTemplateFields().selectAvailables(selectedFields);
    },

    /* ***************************************************************
     * @Description. Updates the selected active fields in the 
     * Template Fields Model.
     *****************************************************************/
    selectActiveTemplateFields: function (component, event, helper) {
        var selectedFields = {};
        event.getParam('selectedRows').forEach(function(selectedRow) {
            selectedFields[selectedRow.id] = selectedRow;
        });
        var model = component.get('v.model');
        model.getTemplateFields().selectActives(selectedFields);
    },

    /* ***************************************************************
     * @Description. Updates the selected available fields in the 
     * Template Fields Model to active.
     *****************************************************************/
    updateToActive: function (component, event, helper) {
        var model = component.get('v.model');
        model.getTemplateFields().updateToActive();
    },

    /* ***************************************************************
     * @Description. Updates the selected active fields in the 
     * Template Fields Model to available.
     *****************************************************************/
    updateToAvailable: function (component, event, helper) {
        var model = component.get('v.model');
        model.getTemplateFields().updateToAvailable();
    }
}); // eslint-disable-line
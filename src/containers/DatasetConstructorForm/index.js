import './DatasetConstructorForm.scss';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import ConstructorForm from '../../components/ConstructorForm';
import { DatasetConstructorFormModel } from '../../store/models';

import * as actions from '../../store/actions';
import * as selectors from '../../store/selectors';

class DatasetConstructorForm extends PureComponent {

    render() {

        return (
            <ConstructorForm
                formModel={DatasetConstructorFormModel}
                {...this.props}/>
        )
    }
}

const mapStateToProps = state => {

    return {
        isConnected: selectors.isWeb3Connected(state),
        isSubmitting: selectors.isDatasetConSubmitting(state),
        formValues: selectors.getDatasetConFormValues(state),
        lists: selectors.getDatasetConLists(state),
        formErrors: selectors.getDatasetConFormErrors(state),
        messages: selectors.getDatasetConMessages(state),
        errorMessages: selectors.getDatasetConErrorMessages(state),
        progress: selectors.getDatasetConFormProgress(state)
    };
};

const mapDispatchToProps = dispatch => {

    return {
        resetConstructorState: () => dispatch(actions.resetDatasetConstructorState()),
        addMultipleFieldItem: name => dispatch(actions.addDatasetBatch(name)),
        removeMultipleFieldItem: (name, item) => dispatch(actions.removeDatasetBatch(name, item)),
        updateField: (field, value, item) => dispatch(actions.setDatasetConstructorField(field, value, item)),
        dismissMessage: index => dispatch(actions.dismissDatasetConstructorMessage(index)),
        invalidateError: () => dispatch(actions.invalidateDatasetConstructorError()),
        submitForm: () => dispatch(actions.submitDatasetConstructorForm()),
        updateAccounts: (updateAction) => dispatch(actions[updateAction]())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DatasetConstructorForm);
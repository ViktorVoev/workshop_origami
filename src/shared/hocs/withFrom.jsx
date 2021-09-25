import React from 'react';

function withForm(Cmp, initialState, schema) {
    return class extends React.Component{
        state = {
            form: initialState,
            errors: null
        }

        controlChangeHandlerFactory = name => {
            let id;
            return e => {
            const newValue = e.target.value;
            if (id) { clearTimeout(id); id = null; }
            id = setTimeout(() => {
                this.setState(({ form }) => {
                  return  { form: {...form, [name]: newValue } }
                       });
                id = null;
            }, 0);
        }
        }

        getFormState = () => {
            return this.state.form
        };

        getFormErrorState = () => {
            return this.state.errors
        };

        runValidations = () => {
            return schema.validate(this.state.form, { abortEarly: false })
            .then(() => this.state.form).catch(err => {
               const errors = err.inner.reduce((acc, { path, message }) => {    
                    acc[path] = (acc[path] || []).concat(message);
                    return acc;
                }, {});
                this.setState({ errors })
            });
        }

        render() {
            return <Cmp {...this.props} controlChangeHandlerFactory={this.controlChangeHandlerFactory} getFormState={this.getFormState} runValidations={this.runValidations} getFormErrorState={this.getFormErrorState}></Cmp>
        }
    }
}

export default withForm;
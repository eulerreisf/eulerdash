import React from 'react';

//Formik
import { Field, Form, Formik } from 'formik';
//Yup
import * as Yup from 'yup';
//Material
import { Typography, withStyles } from '@material-ui/core';
import { TextField } from 'formik-material-ui';

//Styles
import { styles } from './styles';

export const SignUp = ({ classes }) => (
	<div className={classes.root}>
		<div className={classes.container}>
			<Formik
				initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
				validationSchema={Yup.object({
					firstName: Yup.string()
						.max(15, 'Máximo de 15 caracteres')
						.required('Preenchimento obrigatório'),
					lastName: Yup.string()
						.max(20, 'Máximo de 20 caracteres')
						.required('Preenchimento obrigatório'),
					email: Yup.string()
						.email('Email inválido')
						.required('Preenchimento obrigatório')
				})}
				onSubmit={values => {
					alert(JSON.stringify(values, null, 2));
				}}
			>
				{({ ...props }) => (
					<div className={classes.form}>
						<Form>
							<Field
								label='Nome'
								name='firstName'
								type='firstName'
								variant='outlined'
								component={TextField}
							/>
							<Field
								label='Sobrenome'
								name='lastName'
								type='lastName'
								component={TextField}
								variant='outlined'
							/>
							<Field
								label='Email'
								name='email'
								component={TextField}
								variant='outlined'
							/>
							<Field
								label='Senha'
								name='password'
								type='password'
								component={TextField}
								variant='outlined'
							/>
							<button type='submit'>Submit</button>
						</Form>
					</div>
				)}
			</Formik>
		</div>
	</div>
);

export default withStyles(styles)(SignUp);

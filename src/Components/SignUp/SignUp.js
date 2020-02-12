import React from 'react';

//Formik
import { useFormik } from 'formik';
//Yup
import * as Yup from 'yup';
//Material
import { TextField, Typography, withStyles } from '@material-ui/core';

//Styles
import { styles } from './styles';

export const SignUp = ({ classes }) => {
	const formik = useFormik({
		initialValues: { firstName: '', lastName: '', email: '', password: '' },
		validationSchema: Yup.object({
			firstName: Yup.string()
				.max(15, 'Máximo de 15 caracteres')
				.required('Preenchimento obrigatório'),
			lastName: Yup.string()
				.max(20, 'Máximo de 20 caracteres')
				.required('Preenchimento obrigatório'),
			email: Yup.string()
				.email('Email inválido')
				.required('Preenchimento obrigatório')
		}),
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
		}
	});

	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<div className={classes.title}>
					<Typography variant='h4'>Registre-se</Typography>
				</div>
				<form onSubmit={formik.handleSubmit} className={classes.form}>
					<TextField
						id='firstName'
						variant='outlined'
						label='Nome'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.firstName}
					/>
					<TextField
						id='lastName'
						variant='outlined'
						label='Sobrenome'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.lastName}
					/>
					<TextField
						id='email'
						variant='outlined'
						label='Email'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
					/>
					<TextField
						id='password'
						type='password'
						variant='outlined'
						label='Senha'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.password}
					/>
				</form>
			</div>
		</div>
	);
};

export default withStyles(styles)(SignUp);

import React from 'react';

//Formik
import { Field, Form, Formik } from 'formik';
//Yup
import * as Yup from 'yup';
//Material
import { Typography, withStyles, Button, Link } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { TextField } from 'formik-material-ui';

//React Router Dom
import { useHistory } from 'react-router-dom';

//Styles
import { styles } from './styles';

export const SignUp = ({ classes }) => {
	const history = useHistory();
	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<Typography variant='h3'>Cadastro</Typography>
				<Formik
					initialValues={{
						firstName: '',
						lastName: '',
						email: '',
						password: ''
					}}
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
					onSubmit={() => history.push('/signin')}
				>
					{({ ...props }) => (
						<Form>
							<div className={classes.form}>
								<Field
									label='Nome'
									name='firstName'
									type='firstName'
									variant='outlined'
									component={TextField}
									className={classes.elements}
								/>
								<Field
									label='Sobrenome'
									name='lastName'
									type='lastName'
									component={TextField}
									variant='outlined'
									className={classes.elements}
								/>
								<Field
									label='Email'
									name='email'
									component={TextField}
									variant='outlined'
									className={classes.elements}
								/>
								<Field
									label='Senha'
									name='password'
									type='password'
									component={TextField}
									variant='outlined'
									className={classes.elements}
								/>
								<Button
									className={classes.button}
									variant='contained'
									size='small'
									endIcon={<SaveIcon />}
									type='submit'
								>
									Salvar
								</Button>
								<Link href={'/signin'} variant="caption">Já sou cadastrado</Link>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default withStyles(styles)(SignUp);

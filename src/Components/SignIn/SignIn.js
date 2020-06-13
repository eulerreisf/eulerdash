import React from 'react';

//Formik
import { Field, Form, Formik } from 'formik';
//Yup
import * as Yup from 'yup';
//Material
import { Typography, withStyles, Button, Link } from '@material-ui/core';
import { KeyboardArrowRight } from '@material-ui/icons';
import { TextField } from 'formik-material-ui';

//React Router Dom
import { useHistory } from 'react-router-dom';

//Styles
import { styles } from './styles';

export const SignIn = ({ classes }) => {
	const history = useHistory();
	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<Typography
					variant='h3'
				>
					Login
				</Typography>
				<Formik
					initialValues={{
						email: '',
						password: ''
					}}
					validationSchema={Yup.object({
						email: Yup.string()
							.email('Email inválido')
							.required('Preenchimento obrigatório')
					})}
					onSubmit={() => history.push('/')}
				>
					{({ ...props }) => (
						<Form>
							<div className={classes.form}>
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
									variant='contained'
									size='small'
									endIcon={<KeyboardArrowRight />}
									type='submit'
									className={classes.button}
								>
									Entrar
								</Button>
								<Link href={'/signup'} variant="caption">Cadastre-se</Link>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default withStyles(styles)(SignIn);

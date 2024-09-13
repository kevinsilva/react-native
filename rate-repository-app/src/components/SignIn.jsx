import * as yup from 'yup';
import { Text, TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-native';
import useSignIn from '../hooks/useSignIn';

import theme from '../theme';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  button: {
    padding: 10,
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: theme.colors.white,
  },
  errorText: {
    color: theme.colors.error,
    alignSelf: 'flex-start',
    marginBottom: 15,
  },
  errorInput: {
    borderColor: theme.colors.error,
  },
});

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const data = await signIn({ username, password });
      if (data) navigate('/');
      console.log('data', data);
    } catch (error) {
      console.log('error', error);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Username'
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        style={[
          styles.input,
          formik.touched.username &&
            formik.errors.username &&
            styles.errorInput,
        ]}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={styles.errorText}>{formik.errors.username}</Text>
      )}
      <TextInput
        placeholder='Password'
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        secureTextEntry
        style={[
          styles.input,
          formik.touched.password &&
            formik.errors.password &&
            styles.errorInput,
        ]}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={styles.errorText}>{formik.errors.password}</Text>
      )}
      <Pressable onPress={formik.handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;

import signUpUser from './4-user-promise'
import uploadPhoto from './5-photo-reject'

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userSignUp = signUpUser(firstName, lastName);
  const photoUpload = uploadPhoto(fileName);

  return Promise.allSettled([userSignUp, photoUpload])
    .then((results) => (
      results.map((result) => ({
	status: result.status,
	value: result.status === 'fulfilled' ? result.value : String(result.reason),
      }))
    ));
}

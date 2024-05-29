import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userSignUp = signUpUser(firstName, lastName);
  const photoUpload = uploadPhoto(fileName);

  return Promise
    .allSettled([userSignUp, photoUpload])
    .then((results) => (
      results.map((r) => ({
	status: r.status,
	value: r.status === 'fulfilled' ? r.value : String(r.reason),
      }))
    ));
}

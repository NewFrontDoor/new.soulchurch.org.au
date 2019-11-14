import fetch from 'isomorphic-fetch';

const DRUPAL_WEBFORM_SUBMISSION =
  'https://api.vision100.org/webform_submission/submission';

export function postToWebform(formData, callback) {
  fetch(DRUPAL_WEBFORM_SUBMISSION, {
    method: 'POST',
    body: formData
  })
    .then(resp => resp.json())
    .then(data => {
      callback(data);
    })
    .catch(error => {
      console.log(error);
    });
}
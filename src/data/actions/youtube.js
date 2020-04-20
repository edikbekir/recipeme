import youtubeService from '../services/youtube';

export const youtubeActions = {
  getThumbnails
}

function getThumbnails(params){
  return youtubeService.getThumbnails(params)
  .then( response => {
    console.log('do something')
  })
  .catch( error => {
    console.log('handleError')
  })
}

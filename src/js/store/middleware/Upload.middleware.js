// models
import { ImageAssetModel } from 'store/models/Asset.model';

// actions
import * as GamesActions from 'store/actions/Games.actions';

// INTERNAL METHODS

const uploadGameImageAssets = ({ dispatch, gameid, files }) => {
  readFiles(files).then((results) => {
    const assets = results.map((file) => {
      return ImageAssetModel({
        src: file.data,
        name: file.name
      });
    });

    dispatch(GamesActions.AddImageAssets({ gameid, assets }));
  });
};

const readFiles = (files) => {
  return new Promise((resolve, reject) => {
    // flag how many files there should be
    let count = files.length;

    // log successful results
    const results = [];

    files.forEach((file) => {
      readFile(file)
        .then((result) => {
          results.push(result);
          handleFileRead();
        })
        .catch(handleFileRead);
    });

    const handleFileRead = () => {
      count--;
      if (count === 0) {
        resolve(results);
      }
    };
  });
};

const readFile = (file) => {
  return new Promise((resolve, reject) => {
    // if file loads, return contents and name
    const handleFileLoaded = (e) => {
      resolve({ data: e.currentTarget.result, name: file.name });
    };

    // otherwise reject the file
    const handleFileFailed = () => {
      reject(file);
    };

    // create and start file reader
    const reader = new FileReader();
    reader.onload = handleFileLoaded;
    reader.onabort = handleFileFailed;
    reader.onerror = handleFileFailed;
    reader.readAsDataURL(file);
  });
};

// MIDDLEWARE SWITCHES
const UploadMiddleware = ({ dispatch }) => (next) => (action) => {
  next(action);

  switch (action.type) {
    case GamesActions.UPLOAD_IMAGE_ASSETS:
      uploadGameImageAssets({ dispatch, ...action.payload });
      break;
  }
};

export default [UploadMiddleware];

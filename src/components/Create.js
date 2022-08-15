import {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {storage} from '../firebase';
import {ref, getDownloadURL, uploadBytesResumable} from 'firebase/storage';

function Create() {
  const apiUrl = '/api/cards';
  const [videoName, setVideotName] = useState('');
  const [description, setDescription] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [thumbnailUrl, setThumbNailUrl] = useState('');
  const [cost, setCost] = useState('');
  const [progress, setProgress] = useState(0);
  const formHandler = e => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };
  const uploadFiles = file => {
    if (!file) return;
    const storageRef = ref(storage, `/images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      snapshot => {
        const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgress(prog);
      },
      err => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(url => setThumbNailUrl(url));
      }
    );
  };
  const sendDataToMongo = () => {
    axios.post(apiUrl, {
      videoName: videoName,
      description: description,
      thumbnailUrl: thumbnailUrl,
      videoUrl: videoUrl,
      cost: cost,
    });
  };

  return (
    <>
      <h1>Erstelle Content</h1>
      <CreateStyle>
        <UploadForm onSubmit={formHandler}>
          <h2> Schritt 1:</h2>
          <label>Thumbnail auswählen</label>
          <input type="file"></input>
          <button type="submit">Upload - {progress} %</button>
          <div>
            <PreImg src={thumbnailUrl} />
          </div>
        </UploadForm>

        <UploadForm>
          <h2>Schritt 2:</h2>
          <label>Video Name:</label>
          <input type="text" onChange={e => setVideotName(e.target.value)} name="vname" />
          <label>Video Pfad</label>
          <input type="text" onChange={e => setVideoUrl(e.target.value)} name="video" />

          <label>Coin-Kosten</label>
          <input type="number" onChange={e => setCost(e.target.value)} name="cost" />
          <label>Beschreibung:</label>
          <textarea type="text" onChange={e => setDescription(e.target.value)} name="description" />
          <button type="submit" onClick={sendDataToMongo}>
            Einsenden
          </button>
        </UploadForm>
      </CreateStyle>
    </>
  );
}

const UploadForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
`;

const PreImg = styled.img`
  width: 100px;
`;

const CreateStyle = styled.main`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin-bottom: 70px;
`;

export default Create;

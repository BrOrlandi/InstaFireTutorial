import React, { Component } from 'react';
import {
  Button, Modal, Image, Form, Dimmer, Loader,
} from 'semantic-ui-react';

// import firebase, { rebase } from './firebase';

class AddPhoto extends Component {
  state = {
    modalOpen: false,
    photoFile: null,
    photoData: null,
    submiting: false,
  }

  handleCloseModal = () => {
    this.setState({
      modalOpen: false,
    });
  }

  handlePhotoInput = (e) => {
    const inputFiles = e.target.files;
    const file = inputFiles && inputFiles[0];

    if (file) {
      const fileReader = new FileReader();

      fileReader.onload = (loadFile) => {
        this.setState({
          modalOpen: true,
          photoFile: file,
          photoData: loadFile.target.result,
        });
      };

      fileReader.readAsDataURL(file);
    }
  }

  onSubmitPhoto = async (e) => {
    const description = e.target.description.value;
    if (!description) {
      return;
    }

    this.setState({
      submiting: true,
    });

    const user = {}; // identificar o usuario aqui

    const fileName = `${user.uid}_${Date.now()}`;

    const { photoFile } = this.state;
    const pathToPhoto = `photos/${fileName}`;

    // Fazer upload da foto no Storage aqui

    // Depois pegar a URL da foto e armazenar com outros dados no Realtime Database

    this.setState({
      submiting: false,
      modalOpen: false,
      photoFile: null,
      photoData: null,
    });

    window.scrollTo(0, 0);
  }

  onCloseModal = () => {
    this.setState({
      modalOpen: false,
    });
  }

  render() {
    const { modalOpen, photoData, submiting } = this.state;

    return (
      <div className="add-photo">
        <div className="add-photo__button">
          <Button
            as="label"
            htmlFor="photo-input"
            primary
            icon="camera"
            circular
            size="massive"
            floated="right"
          />
          <input id="photo-input" type="file" accept="image/*" onChange={this.handlePhotoInput} />
        </div>
        <Modal open={modalOpen} onClose={this.handleCloseModal} size="small" closeIcon>
          <Modal.Header>Sua nova foto</Modal.Header>
          <Modal.Content className="add-photo__preview">
            <Image src={photoData} centered />
            <Form onSubmit={this.onSubmitPhoto}>
              <Form.Input placeholder="Description..." name="description" className="description__input" />
              <Form.Group className="add-photo__buttons">
                <Form.Button primary content="Enviar foto" />
                <Button type="button" content="Cancelar" onClick={this.onCloseModal} />
              </Form.Group>
            </Form>
            <Dimmer inverted active={submiting}>
              <Loader active={submiting}>Enviando foto...</Loader>
            </Dimmer>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default AddPhoto;

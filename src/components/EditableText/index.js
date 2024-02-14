import {Component} from 'react'

import {
  MainContainer,
  EditableContainer,
  EditableHeading,
  InputAndSaveBtnContainer,
  ButtonElement,
  InputBtn,
  EditablePara,
  ParaBtnCont,
} from './styledComponents'

class EditableText extends Component {
  state = {
    searchInput: '',
    isBtnClicked: false,
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickBtn = () => {
    this.setState(prevState => ({isBtnClicked: !prevState.isBtnClicked}))
  }

  render() {
    const {searchInput, isBtnClicked} = this.state

    return (
      <MainContainer>
        <EditableContainer>
          <EditableHeading>Editable Text Input</EditableHeading>
          <InputAndSaveBtnContainer>
            {isBtnClicked ? (
              <ParaBtnCont>
                <EditablePara>{searchInput}</EditablePara>
                <ButtonElement type="button" onClick={this.onClickBtn}>
                  Edit
                </ButtonElement>
              </ParaBtnCont>
            ) : (
              <>
                <InputBtn
                  type="text"
                  value={searchInput}
                  onChange={this.onChangeInput}
                />
                <ButtonElement type="button" onClick={this.onClickBtn}>
                  Save
                </ButtonElement>
              </>
            )}
          </InputAndSaveBtnContainer>
        </EditableContainer>
      </MainContainer>
    )
  }
}
export default EditableText

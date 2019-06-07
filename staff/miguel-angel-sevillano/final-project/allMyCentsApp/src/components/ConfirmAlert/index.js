import React from "react"
import ReactDOM from "react-dom"



export function ConfirmAlert({ onSelectYes,onSelectNo }) {
debugger
    return ReactDOM.createPortal(
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <div class="content">
                        <span>
                        Are you sure ?
                        <button class="button is-success"  onClick={onSelectYes}>Yes</button>
                        <button class="button is-danger"  onClick={onSelectNo}>No</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        , document.getElementById('modal'))
}

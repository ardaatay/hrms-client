import React from "react";

export default function AtayModalSubmit({ title, handleSubmit }) {
    return (
        <div class="modal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Modal title</h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <p>{title}</p>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Hayır
                        </button>
                        <button
                            type="button"
                            class="btn btn-primary"
                            onClick={handleSubmit}
                        >
                            Evet
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

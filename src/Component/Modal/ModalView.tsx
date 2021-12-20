import React, {MouseEventHandler} from "react";

export default function ModelView({showHideClassName,children, closeHandler}:
    {showHideClassName: string, children:any, closeHandler: MouseEventHandler})
{
        return (
            <div>
                <button type="button" onClick={closeHandler}>
                    Open
                </button>

                <div className={showHideClassName}>
                    <section className="modal-main">
                        {children}
                        <button type="button" onClick={closeHandler}>
                            Close!
                        </button>
                    </section>
                </div>
            </div>

        );
}
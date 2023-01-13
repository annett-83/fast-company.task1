import React from "react";

export const tableLabel = (users, renderPhrase) => {
    return (
        <div className={`badge mb-2 p-2 ${users.length>0 ? "bg-primary" : "bg-danger"}`}>
            <h2>
                {users.length >0 
                ?`${users.length} ${renderPhrase(users.length)} с тобой сeгодня `: " С тобой никто не тусанет сегдня"}
            </h2>
        </div>
    );
}; 
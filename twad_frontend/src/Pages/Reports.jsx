import React from 'react';

function Reports() {
   return(
        <div className="reports">
            <form>
                <label htmlFor='name'>Username:</label>
                <input type="text" placeholder="Enter username" name="name" id="name" />
            </form>
        <h5>Reports</h5>
        </div>
    )
}

export default Reports;
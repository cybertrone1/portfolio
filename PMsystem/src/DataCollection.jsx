const DataColection = () => {
    return ( 
        <div className="datas">
            <div className="info-logs">
                <form>
                    <label htmlFor="data">Data <span>upload file</span> </label> <br />
                    <input type="file"
                        required
                    /> <br />

                    <label htmlFor="comment">comment</label>
                    <textarea 
                        placeholder="comment on your code"
                    />
                    <button>submit</button>
                </form>
            </div>
            <div className="data-display">
                <table>
                    <thead>
                        
                    </thead>
                </table>
            </div>
        </div>
     );
}
 
export default DataColection;
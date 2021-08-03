const PublishInputs = ({ type, placeholder, inputName, setFunc }) => {
  return (
    <div>
      {type === "textarea" && (
        <div className="PublishInputs">
          <h2>{inputName}</h2>
          <textarea
            placeholder={placeholder}
            onChange={(event) => {
              setFunc(event.target.value);
            }}
          />
        </div>
      )}
      {type === "file" && (
        <div className="PublishInputs">
          <input
            type={type}
            placeholder={placeholder}
            onChange={(event) => {
              setFunc(event.target.files[0]);
              console.log(event.target.files);
            }}
          />
        </div>
      )}
      {type === "text" && (
        <div className="PublishInputs">
          <h2>{inputName}</h2>
          <input
            type={type}
            placeholder={placeholder}
            onChange={(event) => {
              setFunc(event.target.value);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default PublishInputs;

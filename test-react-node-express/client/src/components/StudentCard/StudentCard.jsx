const StudentCard = (props) => {
  return (
    <>
      {/* Card */}
      <div className="card m-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {props.firstName} {props.lastName}
          </h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            {props.class}
          </h6>
          <a
            href="#"
            className="card-link"
            data-bs-toggle="modal"
            data-bs-target={`#exampleModal${props.id}`}
          >
            More info
          </a>
        </div>
      </div>
      {/* Modal */}
      <div
        className="modal fade"
        id={`exampleModal${props.id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Student Information
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                <span>First Name: </span>
                {props.firstName}
              </p>
              <p>
                <span>Last Name: </span>
                {props.lastName}
              </p>
              <p>
                <span>Class: </span>
                {props.class}
              </p>
              <p>Grades:</p>
              <ul>
                <li>
                  <span>Math: </span>
                  {props.gradeMath}
                </li>
                <li>
                  <span>Physics: </span>
                  {props.gradePhysics}
                </li>
                <li>
                  <span>Chemistry: </span>
                  {props.gradeChemistry}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentCard;

import { Accordion } from "react-bootstrap";

const SafraAccordion = ({ event, active, onClick, title, value }) => {
    return (
        <div className="accordion-item">
            <h5 className="accordion-header">
                <Accordion.Toggle
                    as={"button"}
                    className={`accordion-button ${active == event ? "" : "collapsed"}`}
                    eventKey={event}
                    aria-expanded={active == event ? "true" : "false"}
                    onClick={() => onClick()}
                >
                    {title}
                </Accordion.Toggle>
            </h5>
            <Accordion.Collapse eventKey={event} className="accordion-collapse">
                <div className="accordion-body">
                    <Accordion.Toggle
                    >
                        <p>
                            {value}
                        </p>
                    </Accordion.Toggle>
                </div>
            </Accordion.Collapse>
        </div>
    );
};
export default SafraAccordion;

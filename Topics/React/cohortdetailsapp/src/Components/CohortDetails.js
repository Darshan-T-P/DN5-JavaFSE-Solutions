import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails(props) {
    const cohort = props.cohort || props;
    const code = cohort.code || 'INTADM21DF002';
    const name = cohort.name || 'Genc Java FSE';
    const track = cohort.track || cohort.technology || 'Java FSE';
    const startDate = cohort.startDate || '10-May-2021';
    const status = cohort.status || 'ongoing';

    const h3Style = {
        color: (status.toLowerCase() === 'ongoing') ? 'green' : 'blue'
    };

    return (
        <div className={styles.box}>
            <h3 style={h3Style}>{code} - {name}</h3>
            <dl>
                <dt>Cohort Code</dt>
                <dd>{code}</dd>
                <dt>Technology / Track</dt>
                <dd>{track}</dd>
                <dt>Start Date</dt>
                <dd>{startDate}</dd>
                <dt>Status</dt>
                <dd>{status}</dd>
            </dl>
        </div>
    );
}

export default CohortDetails;

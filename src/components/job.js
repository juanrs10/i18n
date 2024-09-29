import React from "react";
import { FormattedDate, FormattedNumber } from 'react-intl';

const Job = (props) => {
  const isSpanish = props.locale.startsWith('es');
  const formattedSalary = (
    <FormattedNumber
      value={props.offer.salary}
      minimumFractionDigits={1}
      maximumFractionDigits={1}
    />
  );

  const salaryWithMillions = isSpanish
    ? props.offer.salary === 1
      ? `${formattedSalary} millón`
      : `${formattedSalary} millones`
    : `${formattedSalary} million`;

  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>{salaryWithMillions}</td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </td>
      <td>
        <FormattedNumber value={props.offer.views} />
      </td>
    </tr>
  );
};

export default Job;

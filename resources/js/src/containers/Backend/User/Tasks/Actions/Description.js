import React from 'react';
import { Parser } from 'html-to-react';

import { convertDate } from '../../../../../shared/utility';

const parser = new Parser();

export default ({ request }) => {
    let comments;
    const colors = ['orange', 'pink', 'green'];
    const texts = ['Pending', 'Unachieved', 'Achieved'];

    comments = request.status > 0 && <div className={'rounded p-4 mt-3 text-' + colors[request.status] + ' bg-' + colors[request.status] + '-25'}>
        <div>
            {texts[request.status]} by: <span className="text-700">{request.edited_by}</span> on {convertDate(request.created_at)}
        </div>
        {request.comments && <div className="mt-2">{parser.parse(request.comments)}</div>}
    </div>;

    return <div className="text-justify">
        {parser.parse(request.description)}

        {comments}
    </div>;
};
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { fetchDrupalData } from '../../utils/fetch-functions';
import ContentWrapper from '../content-wrapper';
import TitleBreadcrumb from './title-breadcrumb';
import { IoIosDocument } from 'react-icons/io';


export default function Newsletter({ newslettersData }) {
    const [newsletters, setNewsletters] = useState(newslettersData);
    const [newslettersFetched, setNewslettersFetched] = useState(Boolean(newsletters));

    useEffect(() => {
        if (newslettersFetched === false) {
            fetchDrupalData('newsletter', {}).then(response => {
                setNewsletters(response);
                setNewslettersFetched(true);
            });
        } else {
            setNewsletters(newsletters);
        }
    }, [newslettersFetched, newsletters]);


    if (newslettersFetched === true) {
        var newslettersTable = newsletters.map(newsletter => {
            return (
                <tr key={newsletter.date + "-" + newsletter.node_title}>
                    <td><IoIosDocument style={{ fill: '#e74c3c' }} />&nbsp;<a href={newsletter.url} target="_blank" rel="noreferrer noopener">{newsletter.node_title}</a></td>
                </tr >
            )
        });
    }


    return (
        <section>
            <TitleBreadcrumb
                title={'Newsletters'}
                breadcrumbs={[['Home', '/'], ['Resources', '']]}
            />
            <ContentWrapper width="wide">
                {newslettersFetched === true ? (<table>
                    <tbody>
                        {newslettersTable}
                    </tbody>
                </table>) : ''}
            </ContentWrapper>
        </section>
    );
}

import React, { useState, useEffect } from 'react';

import ContentWrapper from '../content-wrapper';
import TitleBreadcrumb from './title-breadcrumb';
import Calendar, { drupalClient } from '@newfrontdoor/calendar';

const client = drupalClient("https://api.vision100.org/api/views/all_events_api")


export default function CalendarPage({ }) {
    return (
        <section>
            <TitleBreadcrumb
                title={'Calendar'}
                breadcrumbs={[['Home', '/'], ['Events', '']]}
            />
            <ContentWrapper width="wide">
                <div>
                    <Calendar
                        client={client}
                        initialView={'month'}
                    />
                </div>
            </ContentWrapper>
        </section>
    );
}

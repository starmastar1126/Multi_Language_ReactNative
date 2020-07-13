import useResults from '../hooks/useResults';
const results = useResults();


// filter result to showing terms one by one (FrontTermsScreen)
export const filterResultsByTermId = maxTid => {
    //es6 code to filter repeated terms
    const filteredTerms = results.filter((results, index, self) =>
        self.findIndex(t =>
            t.termId === results.termId && t.termId >= maxTid-5 && t.termId <= maxTid) === index);
    return filteredTerms;
}

// filter to show intros only (FrontTermsScreen)
export const filterResultsToGetIntros = () => {
    const intros = results.filter(tid => tid.termId == 13 )
    .map(r => ({title: r.title1, sourceId: r.sourceId, body: 'body1'}));
    return intros;
}


// filter titles by termId for (TermTitlesScreen)
export const filterTitlesByTermId = termId => {
    const titles = results.filter(result => result.termId == termId)
    .map(r => ([
        {title: r.title1, sourceId: r.sourceId, body: 'body1'},
        {title: r.title2, sourceId: r.sourceId, body: 'body2'},
        {title: r.title3, sourceId: r.sourceId, body: 'body3'},
        {title: r.title4, sourceId: r.sourceId, body: 'body4'},
        {title: r.title5, sourceId: r.sourceId, body: 'body5'},
        {title: r.title6, sourceId: r.sourceId, body: 'body6'}
        ]))
    .reduce((acc, curr) => {
        return [...acc, ...curr];
    }, [])
    .filter((el) => el.title != undefined);
    return titles;
}
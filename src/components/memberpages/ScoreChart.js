import Chart from 'react-google-charts';

const TrendData = [
    ["Date", "Score"],
    [1, 4],
    [5, -1],
    [8, 2],
    [10, 3],
    [14, 0],
    [15, 5],
    [19, 2],
    [22, 4],
    [25, 4],
    [28, 2],
    [30, 3]
]

const TrendOptions = {
    title: 'Round Score by Data (May)',
    hAxis: {title: 'Day'},
    vAxis: {title: 'Score'},
    legend: 'none',
    trendlines: { 0: {}},
}

function ScoreChart() {
    return(
        <>
            <h2>React Trend Line Chart Example</h2>
            <Chart
            width={'600px'}
            height={'350px'}
            chartType="ScatterChart"
            loader={<div>Loading Chart</div>}
            data={TrendData}
            options={TrendOptions}
            rootProps={{ 'data-testid': '1' }}
            />
        </>
    )
}

export default ScoreChart;
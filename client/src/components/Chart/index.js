import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts'
import useStyles from './styles'

const Chart = ({ priceHistory }) => {
  const classes = useStyles()

  const { length } = priceHistory || {}
  const brushStartIndex =
    (length > 19 && length - Math.floor(length / 4)) ||
    (length > 4 && length - 5) ||
    0

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={priceHistory}
        margin={{ top: 40, right: 40, bottom: 20, left: 20 }}
      >
        <CartesianGrid vertical={false} />
        {/* <XAxis dataKey="lastTradeTime" label="Date" />
          <YAxis domain={['auto', 'auto']} label="Stock Price" /> */}
        <XAxis dataKey="lastTradeTime" />
        <YAxis />
        <Tooltip
          wrapperStyle={{
            borderColor: 'white',
            boxShadow: '2px 2px 3px 0px rgb(204, 204, 204)',
          }}
          contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
          labelStyle={{ fontWeight: 'bold', color: '#666666' }}
        />
        <Line dataKey="price" stroke="#ff7300" dot={false} />
        <Brush dataKey="lastTradeTime" startIndex={brushStartIndex}>
          <AreaChart>
            <CartesianGrid />
            <YAxis hide domain={['auto', 'auto']} />
            <Area dataKey="price" stroke="#ff7300" fill="#ff7300" dot={false} />
          </AreaChart>
        </Brush>
      </LineChart>
    </ResponsiveContainer>
  )
}
export default Chart

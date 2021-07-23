import { Graph } from 'react-d3-graph'
import { useState, useEffect } from 'react'

const data = {
  nodes: [
    // Locations
    { id: 'Burlington, Vermont' },
    { id: 'New York City, New York' },
    { id: 'Chicago, Illinois' },
    { id: 'San Francisco, California' },
    // { id: 'Los Angles, California' },

    // People
    { id: 'Zebulon Scoville' },
    { id: 'Jerry Greenfield' },
    { id: 'Lady Ada' },
    { id: 'Tom Preston-Werner' },
    { id: 'Guillermo Rauch' },
    { id: 'Quinn Slack' },
    { id: 'Jacky Zhao' },
    { id: 'Lachlan Cambell' },
    { id: 'Theo Bleier' },
    { id: 'Amogh Chaubey' },
    { id: 'Pradyun Narkadamilli' },
    { id: 'Jacob Haap' },
    { id: 'Yuto N.' },
    { id: 'John Lins' },
    { id: 'Kevalin Ketcham' },
  ],
  links: [
    // Burlington
    { source: 'Burlington, Vermont', target: 'Zebulon Scoville' },
    { source: 'Burlington, Vermont', target: 'Jerry Greenfield' },

    // New York
    { source: 'New York City, New York', target: 'Lady Ada' },
    { source: 'New York City, New York', target: 'Jacky Zhao' },
    { source: 'New York City, New York', target: 'Lachlan Cambell' },
    { source: 'New York City, New York', target: 'Theo Bleier' },
    { source: 'New York City, New York', target: 'Amogh Chaubey' },

    // Chicago
    { source: 'Chicago, Illinois', target: 'Tom Preston-Werner' },

    // San Francisco, California
    { source: 'San Francisco, California', target: 'Tom Preston-Werner' },
    { source: 'San Francisco, California', target: 'Guillermo Rauch' },
    { source: 'San Francisco, California', target: 'Quinn Slack' },
    { source: 'San Francisco, California', target: 'Pradyun Narkadamilli' },
    { source: 'San Francisco, California', target: 'Jacob Haap' },
    { source: 'San Francisco, California', target: 'Yuto N.' },
    { source: 'San Francisco, California', target: 'John Lins' },
    { source: 'San Francisco, California', target: 'Kevalin Ketcham' },
  ],
}

const onClickNode = function (nodeId: string) {
  window.alert(`Clicked node ${nodeId}`)
}

const onClickLink = function (source: string, target: string) {
  window.alert(`Clicked link between ${source} and ${target}`)
}

const useWindowSize = () => {
  const [w, setW] = useState<{ [k: string]: undefined | number }>({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    if (window !== 'undefined' && window !== undefined) {
      const handle = () => {
        setW({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
      window.addEventListener('resize', handle)
      handle()
      return window.removeEventListener('resize', handle)
    }
  }, [])

  return w
}

export default function Visual() {
  const size = useWindowSize()
  return size.height && size.width ? (
    <Graph
      id="graph-id" // id is mandatory
      data={data}
      config={{
        nodeHighlightBehavior: true,
        height: size.height * 0.9,
        width: size.width * 0.9,
        minZoom: 2,
        initialZoom: 1.5,
        node: {
          color: 'white',
          size: 900,
          highlightStrokeColor: '#e92741',
          fontColor: 'white',
        },
        link: {
          highlightColor: '#e92741',
          strokeWidth: 3,
        },
      }}
      onClickNode={onClickNode}
      onClickLink={onClickLink}
    />
  ) : (
    <p>loading...</p>
  )
}

import { Graph } from 'react-d3-graph'
import { useState, useEffect } from 'react'

const data = {
  nodes: [{ id: 'Harry' }, { id: 'Sally' }, { id: 'Alice' }],
  links: [
    { source: 'Harry', target: 'Sally' },
    { source: 'Harry', target: 'Alice' },
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
        node: {
          color: 'white',
          size: 500,
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

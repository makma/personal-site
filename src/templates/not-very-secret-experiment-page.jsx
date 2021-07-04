import React, { useEffect, useState } from 'react'
import CodeHighlighter from '../components/CodeHighlighter/index'
import fpOS from '@fingerprintjs/fingerprintjs'
import fpPro from '@fingerprintjs/fingerprintjs-pro'
import Botd from '@fpjs-incubator/botd-agent'

const NotVerySecretExperimentPage = () => {
  const [visitorIdOS, setVisitorIdOS] = useState('Waiting for visitorIdOS...')
  const [resultOS, setResultOS] = useState('')
  const [botdResult, setBotdResult] = useState('')

  const [visitorIdPro, setVisitorIdPro] = useState(
    'Waiting for visitorIdPro...'
  )
  const [resultPro, setResultPro] = useState('')

  useEffect(() => {
    // Initialize an agent at application startup.
    const botdPromise = Botd.load({
      token: 'RBKN12LFJAyyjMSr30J',
      mode: 'allData',
    })

    ;(async () => {
      // Get the bot detection result when you need it.
      const botd = await botdPromise
      const result = await botd.detect()
      setBotdResult(JSON.stringify(result, null, 2))
    })()

    const fpOSPromise = fpOS.load()

    ;(async () => {
      const fp = await fpOSPromise
      const result = await fp.get()
      setVisitorIdOS(`Fingerprint by OSS is: ${result.visitorId}`)
      setResultOS(JSON.stringify(result, null, 2))
    })()

    fpPro
      .load({
        token: 'tQUwQQOuG9TNwqc6F4I2',
        region: 'eu',
        endpoint: 'https://fp.martinmakarsky.com',
      })
      .then((fp) => fp.get({ extendedResult: true }))
      .then((result) => {
        setVisitorIdPro(`Fingerprint by PRO is: ${result.visitorId}`)
        setResultPro(JSON.stringify(result, null, 2))
      })
  }, [])

  return (
    <>
      <div>
        <h2>botd</h2>
        <CodeHighlighter language="json" code={botdResult} />
      </div>
      <div>
        <h2>FingerprintJS open source</h2>
        <h3>{visitorIdOS}</h3>
        <CodeHighlighter language="json" code={resultOS} />
      </div>
      <div>
        <h2>FingerprintJS PRO</h2>
        <h3>{visitorIdPro}</h3>
        <CodeHighlighter language="json" code={resultPro} />
      </div>
    </>
  )
}

export default NotVerySecretExperimentPage

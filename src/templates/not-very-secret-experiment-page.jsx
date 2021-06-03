import React, { useEffect, useState } from 'react'
import CodeHighlighter from '../components/CodeHighlighter/index'
import fpOS from '@fingerprintjs/fingerprintjs'
import fpPro from '@fingerprintjs/fingerprintjs-pro'

const NotVerySecretExperimentPage = () => {
  const [visitorIdOS, setVisitorIdOS] = useState('Waiting for visitorIdOS...')
  const [resultOS, setResultOS] = useState('')

  const [visitorIdPro, setVisitorIdPro] = useState(
    'Waiting for visitorIdPro...'
  )
  const [resultPro, setResultPro] = useState('')

  const fpOSPromise = fpOS.load()

  useEffect(() => {
    (async () => {
      const fp = await fpOSPromise
      const result = await fp.get()
      setVisitorIdOS(`Fingerprint by OSS is: ${result.visitorId}`)
      setResultOS(JSON.stringify(result, null, 2))
    })()

    fpPro
      .load({token: 'tQUwQQOuG9TNwqc6F4I2', region: 'eu', endpoint: 'https://fp.martinmakarsky.com'})
      .then((fp) => fp.get())
      .then((result) => {
        setVisitorIdPro(`Fingerprint by PRO is: ${result.visitorId}`)
        setResultPro(JSON.stringify(result, null, 2))
      })
  }, [])

  return (
    <>
      <div>
        <h2>FingerprinJS open source</h2>
        <h3>{visitorIdOS}</h3>
        <CodeHighlighter language="json" code={resultOS} />
      </div>
      <div>
        <h2>FingerprinJS PRO</h2>
        <h3>{visitorIdPro}</h3>
        <CodeHighlighter language="json" code={resultPro} />
      </div>
    </>
  )
}

export default NotVerySecretExperimentPage

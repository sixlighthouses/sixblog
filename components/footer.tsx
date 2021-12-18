import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
          <div className="flex flex-row justify-end my-8">
            <a
              href={`https://nextjs.org`}
              className="mx-3 font-bold hover:underline"
            >
             Generated with Next.js
            </a>
          </div>
      </Container>
    </footer>
  )
}

export default Footer

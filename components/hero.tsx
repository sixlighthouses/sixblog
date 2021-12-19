import cn from 'classnames'

type Props = {
}

const Hero = ({}: Props) => {
  return (
    <section>
      <div className="mb-8 md:mb-16">
      <img
        src="/assets/main/shubham-dhage-mx6ExG7TxsY-unsplash.jpg"
        className="shadow-sm hover:shadow-lg transition-shadow duration-200"
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
           Full Stack Development
          </h3>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">sixlighthouses have worked designing, building and deploying software for a range of clients, from local startups to large multinational corporations. We have the skills and experience to help your team build something great. </p>
        </div>
      </div>
    </section>
  )
}

export default Hero

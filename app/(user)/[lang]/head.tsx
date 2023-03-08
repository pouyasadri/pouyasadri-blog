import DefaultTags from '../../DefaultTags'

type Props = {
  params: {
    lang: string;
  };
};
export default function Head({params: {lang}}: Props) {
  const en_title = 'PouyaSadri Daily Blog | The latest in technology!'
  const fr_title = 'Blog quotidien de Pouya Sadri | Les dernières avancées technologiques !'
  const en_description = 'Discover the exciting world of development on our informative and cutting-edge developer blog. Stay up-to-date on the latest technologies, programming languages, and industry trends, and unlock your full potential as a developer with our expertly curated content. Whether you\'re a beginner or an expert, our resources will provide you with the tools and knowledge you need to take your skills to the next level. Join us today and explore the infinite possibilities of the developer world!'
  const fr_description = 'Découvrez le monde passionnant du développement sur notre blog informatif et innovant dédié aux développeurs. Restez informé des dernières technologies, langages de programmation et tendances de l\'industrie, et libérez votre plein potentiel en tant que développeur grâce à notre contenu expertement sélectionné. Que vous soyez débutant ou expert, nos ressources vous fourniront les outils et les connaissances dont vous avez besoin pour améliorer vos compétences. Rejoignez-nous dès aujourd\'hui et explorez les possibilités infinies du monde du développement !'
  return (
    <>
      <DefaultTags />
      <title>{lang === 'en' ? en_title : fr_title}</title>
      <meta name='description'
            content={lang === 'en' ? en_description : fr_description} />
    </>
  )
}

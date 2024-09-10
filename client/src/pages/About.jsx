export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            Upload and Share Educational Content
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to our social site for education! This platform was created
              to share knowledge and resources with the world. Our goal is to make
              learning accessible and fun for everyone.
            </p>

            <p>
              On this site, you can upload and share educational content such as
              articles, tutorials, videos, and more. Our community is passionate
              about learning and sharing knowledge, so be sure to check back often
              for new content!
            </p>

            <p>
              We encourage you to engage with other users by commenting, liking,
              and sharing their content. Let's build a community that supports and
              motivates each other to learn and grow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
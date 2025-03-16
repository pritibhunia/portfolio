import React from 'react';
import BlogData from '../assets/data/BlogData.json';
import styles from '../styles/Projects.module.css';

const ProjectPage = () => {
    return (
        <div className={styles.projectsContainer}>
            {BlogData.blogs.map((blog) => (
                <div key={blog.blogId} className={styles.projectBox}>
                    <img src={blog.blogImg} alt={blog.blogTitle} className={styles.blogImg} />
                    <h2>{blog.blogTitle}</h2>
                    <p>{blog.blogDesc}</p>
                    <div className={styles.links}>
                        {blog.blogUrl.url && (
                            <a href={blog.blogUrl.url} target="_blank" rel="noopener noreferrer">
                                {blog.blogUrl.urlTitle}
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectPage;
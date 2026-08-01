module.exports = {
    apps: [
        {
            name: "true-ring",
            script: "npm",
            args: "start",
            cwd: "/root/true-ring",
            env: {
                NODE_ENV: "production",
                PORT: 7009
            }
        }
    ]
};
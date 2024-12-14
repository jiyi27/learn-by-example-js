import Link from "next/link";

export default function RouteTree({ routes, level = 0 }: {
    routes: Array<{ name: string; path: string; children?: typeof routes }>;
    level?: number;
}) {
    return (
        // 最外层容器：
        // - 如果是顶级(level === 0)，不添加额外样式
        // - 如果是子级，添加左边距和左边框来显示层级
        <div className={`${level === 0 ? '' : 'ml-6 border-l border-gray-200'}`}>
            {routes.map((route) => (
                <div key={route.path} className="py-2">
                    {route.children ? (
                        // 如果有子路由，渲染为标题并递归渲染子路由
                        <div>
                            {/* 父级类目标题 */}
                            <h2 className="text-xl font-bold text-gray-800">{route.name}</h2>
                            {/* 子路由容器 */}
                            <div className="mt-2">
                                <RouteTree routes={route.children} level={level + 1} />
                            </div>
                        </div>
                    ) : (
                        // 如果没有子路由，渲染为可点击的链接
                        <Link
                            href={`/${route.path}`}
                            className={`
                ${level === 0 ? 'text-xl font-semibold' : 'text-base'} 
                text-blue-500 hover:text-blue-700 hover:underline ml-4
              `}
                        >
                            {route.name}
                        </Link>
                    )}
                </div>
            ))}
        </div>
    );
}
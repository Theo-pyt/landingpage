'use client'

import { useState } from 'react'

export type PlaylistVideo = {
  embedUrl: string
  title?: string
}

type VideoPlaylistProps = {
  categoryName: string
  videos: PlaylistVideo[]
}

function getYoutubeId(embedUrl: string): string | null {
  const match = embedUrl.match(/embed\/([^?&]+)/)
  return match?.[1] ?? null
}

function getVideoTitle(categoryName: string, index: number, title?: string) {
  return title ?? `${categoryName} ${index + 1}`
}

function FeaturedPlayer({ embedUrl, title }: { embedUrl: string; title: string }) {
  return (
    <article className="w-full bg-deep-blue-dark overflow-hidden border border-deep-blue-light/25 rounded-sm">
      <div className="aspect-video w-full">
        <iframe
          key={embedUrl}
          src={embedUrl}
          title={title}
          className="w-full h-full min-h-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </article>
  )
}

export function VideoPlaylist({ categoryName, videos }: VideoPlaylistProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [menuOpen, setMenuOpen] = useState(true)

  if (videos.length === 0) return null

  if (videos.length === 1) {
    const video = videos[0]
    return (
      <FeaturedPlayer
        embedUrl={video.embedUrl}
        title={getVideoTitle(categoryName, 0, video.title)}
      />
    )
  }

  const activeVideo = videos[activeIndex]
  const activeTitle = getVideoTitle(categoryName, activeIndex, activeVideo.title)

  return (
    <div className="w-full space-y-4">
      <FeaturedPlayer embedUrl={activeVideo.embedUrl} title={activeTitle} />

      <div className="w-full bg-deep-blue-dark border border-deep-blue-light/25 rounded-sm overflow-hidden">
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left text-neutral-200 hover:bg-deep-blue-light/10 transition-colors"
          aria-expanded={menuOpen}
        >
          <span className="text-sm sm:text-base font-medium">More in this playlist</span>
          <span className="text-neutral-400 text-sm shrink-0">{videos.length} videos</span>
        </button>

        {menuOpen ? (
          <ul className="border-t border-deep-blue-light/25 max-h-[18rem] overflow-y-auto">
            {videos.map((video, index) => {
              const title = getVideoTitle(categoryName, index, video.title)
              const videoId = getYoutubeId(video.embedUrl)
              const isActive = index === activeIndex

              return (
                <li key={`${video.embedUrl}-${index}`}>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`w-full flex items-center gap-3 sm:gap-4 px-4 py-3 text-left transition-colors ${
                      isActive
                        ? 'bg-red-500/10 border-l-2 border-red-500'
                        : 'hover:bg-deep-blue-light/10 border-l-2 border-transparent'
                    }`}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    <div className="relative shrink-0 w-28 sm:w-32 aspect-video overflow-hidden rounded-sm bg-black/40 border border-deep-blue-light/25">
                      {videoId ? (
                        <img
                          src={`https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`}
                          alt=""
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      ) : null}
                    </div>
                    <span
                      className={`text-sm sm:text-base leading-snug ${
                        isActive ? 'text-white font-medium' : 'text-neutral-300'
                      }`}
                    >
                      {title}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        ) : null}
      </div>
    </div>
  )
}

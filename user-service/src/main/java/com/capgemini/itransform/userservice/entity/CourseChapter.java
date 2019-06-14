package com.capgemini.itransform.userservice.entity;

public class CourseChapter {
	private int chapterId;
	private String chapterName;
	private ChapterModule chapterModule[];
	
	public CourseChapter() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CourseChapter(int chapterId, String chapterName, ChapterModule[] chapterModule) {
		super();
		this.chapterId = chapterId;
		this.chapterName = chapterName;
		this.chapterModule = chapterModule;
	}

	public int getChapterId() {
		return chapterId;
	}

	public void setChapterId(int chapterId) {
		this.chapterId = chapterId;
	}

	public String getChapterName() {
		return chapterName;
	}

	public void setChapterName(String chapterName) {
		this.chapterName = chapterName;
	}

	public ChapterModule[] getChapterModule() {
		return chapterModule;
	}

	public void setChapterModule(ChapterModule[] chapterModule) {
		this.chapterModule = chapterModule;
	}
	
	
}

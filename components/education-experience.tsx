import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { codefrenetics_experience, education, ExperienceProps, issmai_experience } from "@/data/experience";

export function EducationExperience() {
    const data = [
        {
            title: "Present",
            content: (
                <div>
                    <ExperienceSection experiences={issmai_experience} />
                </div>
            ),
        },
        {
            title: "2021 - 2024",
            content: (
                <div>
                    <ExperienceSection experiences={codefrenetics_experience} />
                </div>
            ),
        },
        {
            title: "2017 - 2021",
            content: (
                <div>
                    <ExperienceSection experiences={education} />
                </div>
            ),
        },
    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}

export const ExperienceSection = ({ experiences }: { experiences: ExperienceProps[] }) => {
    return (
        <div className="w-full">
            <div className="max-w-4xl mx-auto space-y-6">
                {experiences.map((experience, index) => (
                    <Card key={index} className="bg-transparent border-transparent">
                        <CardHeader>
                            <div className="space-y-1">
                                <h2 className="text-2xl font-bold tracking-tight">{experience.company}</h2>
                                <p className="text-xl text-muted-foreground">{experience.role}</p>
                                <div className="flex flex-wrap gap-2 mt-2 pt-3">
                                    {experience.startDate && (
                                        <Badge variant="secondary">
                                            {experience.startDate} - {experience.endDate}
                                        </Badge>
                                    )}
                                    {experience.jobType && <Badge variant="secondary">{experience.jobType}</Badge>}
                                    {experience.location && <Badge variant="secondary">{experience.location}</Badge>}
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {experience.projects.map((project, projectIndex) => (
                                <div key={projectIndex} className="space-y-2">
                                    {project.name && <h3 className="text-xl font-semibold">{project.name}</h3>}
                                    <ul className="space-y-2 text-muted-foreground text-[15px]">
                                        {project.description.map((desc, descIndex) => (
                                            <li key={descIndex} className="list-disc ml-4">
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
import { addOrganization, getOrganizations } from "@/pages/api/autosurvey";
import { Organization } from "@/type/type";
import { useContext, useEffect, useState } from "react";
import { Button, Form, Input, Label, Modal } from "semantic-ui-react";
import OrgCard from "./OrgCard";
import { OrgContext } from "@/helper/context";
import { AutoSurveyHeader } from "./AutoSurveyHeader";
import { useSession } from "next-auth/react";


export default function OrgContent() {
    const { setOrganization, setSignUpStatus } = useContext(OrgContext);
    const [role, setRole] = useState("");
    //const role: String = localStorage.getItem("role") as string;
    const [organizations, setOrganizations] = useState<Organization[]>([]);
    useEffect(() => {
        setRole(localStorage.getItem("role") as string);
        getOrganizations(setOrganizations);
    }, []);

    const [open, setOpen] = useState(false);
    const [errMessage, setErrMessage] = useState<string>("");
    

    return (
        <div className="orgs-content">
            <AutoSurveyHeader />
            { role !== "ROLE_USER" ?
                <Modal animation={false}
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    trigger={<Button className="org-modal-btn" color="green"> Create Organization +</Button>}>
                    <Modal.Header>Make Your Organization</Modal.Header>
                    <Modal.Content>
                        <Form onSubmit={(e) => {
                            e.preventDefault();
                            addOrganization(e, setOrganizations, setOpen, setErrMessage);
                        }}>
                            <Form.Field>
                                <Label>Organization Name</Label>
                                <Input placeholder="Name your organization" type="text" name="orgname" />
                            </Form.Field>
                            <Button type="submit" color="green">Add Organization +</Button>
                            <Button onClick={(e) => {
                                e.preventDefault();
                                setOpen(false);
                            }} color="orange"
                            >Cancel</Button>
                        </Form>
                    </Modal.Content>
                </Modal>
                : null
            }
            <div className="orgs-orgcard-box">
                {organizations.map((organization: Organization, index: number) => {
                    return (
                        <OrgCard key={index} organization={organization} setOrganizations={setOrganizations} />
                    )
                })
                }

            </div>

        </div>
    )



}
import Template2 from "./template2";
import TemplateChild from "./TemplateChild";
import TemplateSingleLine from "./TemplateSingleLine";
import TemplateLogomark from "./TemplateLogomark";
import TemplateStyleGirl from "./TemplateStyleGirl";

const page = () => {
  return (
    <div className=" bg-white flex flex-col">
      <div className="flex flex-row bg-white">
        <div className=" m-10 mr-20">
          <Template2 />
        </div>
        <div className=" m-10">
          <TemplateChild />
        </div>
      </div>
      <div className="flex flex-row bg-white">
        <div className=" m-10 mr-20">
          <TemplateSingleLine />
        </div>
        <div className=" m-10 mr-20">
          <TemplateLogomark />
        </div>
      </div>
      <div className="flex flex-row bg-white">
        <div className=" m-10 mr-20">
          <TemplateStyleGirl />
        </div>
      </div>
    </div>
  );
};

export default page;
